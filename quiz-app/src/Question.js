// import react from'react'; 
// import questions from './questions';
import Option from './Option';

function Question({onResponse,question:{id,prompt,options}}){

    return (
    <div className="question">
        <h1>{prompt}</h1>
        {options.map((option,index) => {
            return <Option onClick={()=>{
                onResponse(index)
                }}
                key={option}>
                {option}
                </Option>
            })
        }
       
    </div>
    );
}
export default Question;