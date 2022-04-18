import ReservationCard from '../components/ReservationCard'
import axios from 'axios'
import { useState, useEffect, useContext } from 'react'
import CategoriesContext from '../context'


const Dashboard = () => {

    const [reservations, setReservations] = useState(null)
    const { categories, setCategories } = useContext(CategoriesContext)

    useEffect(async () => {
        const response = await axios.get('http://localhost:8000/reservations')

        const dataObject = response.data.data
        const arrayOfKeys = Object.keys(dataObject)
        const arrayOfData = Object.keys(dataObject).map((key) => dataObject[key])

        // console.log('array of keys', arrayOfKeys)
        // console.log('array of data', arrayOfData)
        const formattedArray = []
        arrayOfKeys.forEach((key, index) => {
            const formattedData = { ...arrayOfData[index] }
            formattedData['documentId'] = key
            formattedArray.push(formattedData)

        })

        setReservations(formattedArray)

    }, [])

    useEffect(() => {
        setCategories([...new Set(reservations?.map(({ category }) => category))])
    }, [reservations])

    console.log(categories)

    const colors = [
        'rgb(255,179,186)',
        'rgb(255,223,186)',
        'rgb(255,255,186)',
        'rgb(186,255,201)',
        'rgb(186,255,255)'
    ]

    const uniqueCategoria = [
        ...new Set(reservations?.map(({ category }) => category))
    ]


    // console.log(uniqueCategoria)

    return (
        <div className="dashboard">
            <h1>Rezervacie</h1>
            <div className="reservation-container">
                {reservations && uniqueCategoria?.map((uniqueCategoria, categoryIndex) => (
                    <div key={categoryIndex}>
                        <h3>{uniqueCategoria}</h3>
                        {reservations.filter((reservation) => reservation.category === uniqueCategoria)
                            .map((filteredReservation, _index) => (
                                <ReservationCard
                                    id={_index}
                                    color={colors[categoryIndex] || colors[0]}
                                    reservation={filteredReservation}
                                />
                            ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Dashboard