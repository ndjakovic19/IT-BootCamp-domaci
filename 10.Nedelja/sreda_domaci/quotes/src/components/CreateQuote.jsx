import { useState } from "react"
import { postQuote } from "../service"
import { useHistory } from "react-router-dom"

const CreateQuote  = () => {
const[text,setText]= useState('')
const[author, setAuthor] = useState('')
const history = useHistory()

const isValid = () => text != '' &&  author != ''

    return(
        <>
         <div>
            <textarea value = {text} onChange={(e) => setText(e.target.value)}cols="30" rows="10" placeholder = "Quotes..."></textarea>
            <input value = {author} onChange={(e) => { setAuthor(e.target.value) }} type="text" />
            <button onClick = {()=>{
                if(isValid()){
                 postQuote({text,author})
                 history.push('/quotes')
                }
                else{
                 console.warn('Oba polja moraju biti popunjena')
                 setText('')
                 setAuthor('')
                }
                
            }}>Add quote</button>
         </div>
        </>
 
    )
}
export default CreateQuote