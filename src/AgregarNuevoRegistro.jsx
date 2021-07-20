import axios from 'axios';
import React from 'react'; 

export default function AgregarNuevoRegistro(props) {
    const [form, setForm] = React.useState({
        fecha: "",
        concepto: "",
        monto: "",
        tipo: "",
    }); 
    const handleChangefecha = (e) => {
        const newState =JSON.parse(JSON.stringify(form));
        newState.fecha = e.target.value;
        setForm(newState);
    }
    const handleChangeconcepto =(e) =>{
        const newState =JSON.parse(JSON.stringify(form));
        newState.concepto= e.target.value;
        setForm(newState);
    }
    const handleChangemonto = (e) =>{
        const newState =JSON.parse(JSON.stringify(form));
        newState.monto= e.target.value;
        setForm(newState);
    }
    const guardar =async ()=> {
        await axios.post("http://localhost:3000/presupuesto", form); 
        props.history.push("/presupuesto");
    }; 
    return (
        <div>
            <input type="text" name="fecha" placeholder="Fecha" value={form.fecha} onChange={handleChangefecha}/> 
            <input type="text" name="concepto" placeholder="Concepto" value={form.concepto} onChange={handleChangeconcepto}/>
            <input type ="tect" name="monto" placeholder= "$ Monto" value ={form.monto} onChange={handleChangemonto}/>

        </div>
    )
}
