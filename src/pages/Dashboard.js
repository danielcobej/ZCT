import ReservationCard from '../components/ReservationCard'

const Dashboard = () =>{

    const reservation = [
        {
        category: 'q1 2022',
        color: 'red',
        title: 'Moja mama vari lepsie ako tvoja',
        owner: 'Hotel',
        photo: 'https://www.freecodecamp.org/news/content/images/size/w150/2020/09/kealan.jpg',
        status: 'obsadena',
        priority: 2,
        progress: 40,
        description: 'prosim rezervaciu',
        timestamp: '2022-02-11T07:36:17+0000'
        },
        {
        category: 'q2 2022',
        color: 'red',
        title: 'Rezervacia izby',
        owner: 'Hotel',
        photo: 'https://www.freecodecamp.org/news/content/images/size/w150/2020/09/kealan.jpg',
        status: 'rezervovana',
        priority: 5,
        progress: 70,
        description: 'prosim rezervaciu',
        timestamp: '2022-02-11T07:36:17+0000'
        },
        {
        category: 'q3 2022',
        color: 'red',
        title: 'Rezervacia izbyhah',
        owner: 'Hotel',
        photo: 'https://www.freecodecamp.org/news/content/images/size/w150/2020/09/kealan.jpg',
        status: 'volna',
        priority: 5,
        progress: 100,
        description: 'prosim rezervaciu',
        timestamp: '2022-02-11T07:36:17+0000'
        }
        ]

    const colors = [
        'rgb(255,179,186)',
        'rgb(255,223,186)',
        'rgb(255,255,186)',
        'rgb(186,255,201)',
        'rgb(186,255,255)'
    ]


    const uniqueCategoria = [
        ...new Set(reservation?.map( ({category}) => category))
    ]
    

    // console.log(uniqueCategoria)

    return (
        <div className="dashboard">
            <h1>Rezervacie</h1>
            <div className="reservation-container">
                {/* <ReservationCard/> */}
                {reservation && uniqueCategoria?.map((uniqueCategoria, categoryIndex)=>(
                    <div key={categoryIndex}>
                        <h3>{uniqueCategoria}</h3>
                        {reservation.filter(reservation => reservation.category === uniqueCategoria)
                            .map((filteredReservation, _index) =>(
                                <ReservationCard
                                    id={_index}
                                    color={colors[categoryIndex] || colors[0]}
                                    reservation={filteredReservation}
                                />
                            ))
                        
                        }
                    </div>
                ))}


            </div>

        </div>
    )
}

export default Dashboard