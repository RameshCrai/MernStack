const logo = process.env.PUBLIC_URL + '/logo192.png';

export const HomeContent = () => {
    return (
        <>
            <div className="row">
                <div className="col-md-5">
                    <img src={logo} alt="" srcset="" />
                </div>
                <div className="col-md-7">
                    <h1>
                        Lorem ipsum dolor sit,
                        amet consectetur adipisicing elit. Placeat cum corporis hic ipsa eos id nam tempore fuga minus, et quae consectetur
                        temporibus quibusdam dolorem nulla laboriosam suscipit? Aut, incidunt.
                    </h1>
                </div>
        </div>
        </>
    )

}