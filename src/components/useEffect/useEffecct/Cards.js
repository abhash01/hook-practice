import React from 'react'

const Cards = ({users}) => {
    return (
        <div className="container-fluid ">
            <div className="row">
                {
                    users.map((currEle) => {
                        const {id,avatar_url,login,type} = currEle;
                        return(
                            <div key={id} className="col-10 col-md-4">
                                <div className="card mb-3">
                                    <div className="row g-0">
                                        <div className="col-md-4" >
                                        <img style={{maxWidth:100}} src={avatar_url} alt="..." />
                                        </div>
                                        <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{login}</h5>
                                            <p className="card-text">{type}</p>
                                            <p className="card-text"><small className="text-muted">{id}</small></p>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                
            </div>
        </div>
    )
}

export default Cards
