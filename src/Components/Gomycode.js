import PropTypes from 'prop-types';
// const Gomycode=(props)=>{
//     console.log(props)
const Gomycode=({name,old,pays,user,Hello,HelloName,show,children})=>{
   const {userName,userOld,address} = user
    return(
        <div>
            {/* <h2>Gomycode Component</h2>
            <h3>{props.name}</h3>
            <h4>{props.old}</h4>
         
            <ul>
                {
                    props.pays.map((el,i,t)=><li key={i}>{el}</li>)
                }
            </ul>

            <h1>My name is {props.user.userName}, my age is {props.user.userOld} and i am from {props.user.address.city} </h1> */}

            <h2>Gomycode Component</h2>
            <h3>{name}</h3>
            <h4>{old}</h4>
            {
                children
            }
            <ul>
                {
                    pays.map((el,i,t)=><li key={i}>{el}</li>)
                }
            </ul>

            <h1>My name is {userName}, my age is {userOld} and i am from {address.city} </h1>
            {
                show === true ?
                <button onClick={Hello}>Hello</button>
                :
                <button onClick={()=>HelloName("Abdelwaheb")}>Hello Name</button>
            }
            

           

            <h1>{show? 'TRUE' : 'FALSE'}</h1>

           
        </div>
    )
}

Gomycode.defaultProps = {
    name : "Chiguibaf",
    old : 90
}

Gomycode.propTypes = {
   
    name: PropTypes.string
}

export default Gomycode