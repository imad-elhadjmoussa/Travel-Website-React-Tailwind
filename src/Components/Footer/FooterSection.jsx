import { Link } from 'react-router-dom'

export const FooterSection = ({ sectionName, sectionInfo }) => {

    return (
        <div className=' flex flex-col gap-5' >
            {
                sectionName &&
                <h2 className=' font-bold text-lg underline '>
                    {sectionName}
                </h2>
            }
            <div style={sectionName ? {gap:'7px'} : {gap:"20px"} } className='flex flex-col '>
                {
                    sectionInfo.map(ele => {
                        return (
                            <p key={ele.name}>
                                <Link to={ele.link}> {ele.name} </Link>
                            </p>
                        );
                    })
                }
            </div>
        </div>
    );
}