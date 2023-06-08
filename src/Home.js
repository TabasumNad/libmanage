import Nav from './Nav'

import './App.css';
import Users from './Users';



function Home({Toggle}) {
  return (
    <div className='px-3'>
        <Nav Toggle={Toggle}/>
        <div className='container-fluid'>
            <div className='row g-3 my-2'>
                <div className='col-md-3 p-1'>
                    <div className='p-3 bgbar shadow-sm d-flex justify-content-around align-items-center rounded'>
                        <div>
                            <h3 className='fs-2'>17</h3>
                            <p className='fs-5'>Genre of books</p>
                        </div>
                        <i className='bi bi-book-half p-3 fs-1'></i>

                    </div>

                </div>


                <div className='col-md-3 p-1'>
                    <div className='p-3 bgbar shadow-sm d-flex justify-content-around align-items-center rounded'>
                        <div>
                            <h3 className='fs-2'>2570</h3>
                            <p className='fs-5'>Number of books</p>
                        </div>
                        <i className='bi bi-list-ul p-3 fs-1'></i>

                    </div>

                </div>


                <div className='col-md-3 p-1'>
                    <div className='p-3 bgbar shadow-sm d-flex justify-content-around align-items-center rounded'>
                        <div>
                            <h3 className='fs-2'>Timimg</h3>
                            <p className='fs-5'>24 Hours</p>
                        </div>
                        <i className='bi bi-clock-fill p-3 fs-1'></i>

                    </div>

                </div>
                {/* <div className='col-md-3 p-1'>
                    <div className='p-3 bgbar shadow-sm d-flex justify-content-around align-items-center rounded'>
                        <div>
                            <h3 className='fs-2'></h3>
                            <p className='fs-5'>Classrooms</p>
                        </div>
                        <i className='"bi bi-bricks p-3 fs-1'></i>

                    </div>

                </div> */}
            </div>

        </div>
       <div className='flex-container'>
       
    <Users/>
       </div>
    </div>
  )
}

export default Home