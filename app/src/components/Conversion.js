import './Conversion.css';

function Conversion(){
    return (
        <div class="">
            <form action="" class="">
                <input list="moedas" name="moeda" id="option1"/>
                <datalist id="moedas">
                    <option value="Dolar" />
                    <option value="Real" />
                </datalist>
                <label> to </label>
                <input list="moedas" name="moeda" id="option2"/>
                <datalist id="moedas">
                    <option value="Dolar" />
                    <option value="Real" />
                </datalist>
            </form>
        </div>
    );
}

export default Conversion;