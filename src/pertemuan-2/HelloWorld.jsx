export default function HelloWorld(){ //orangtua
    const propsUserCard = {
        nama: "Goku",
        nim: "999999",
        tanggal: "2025-01-01",
        hobi: "main pubg tapi ga diajak"
    }
    return (
          
        <div>  
            <UserCard 
	            nama="Fikri" 
	            nim="169412"
	            tanggal={new Date().toLocaleDateString()}
                hobi = "ngoding"
	          />
                  <UserCard {...propsUserCard}/>
<center>
                  <img src="img/dipung.jpg" width={600} height={250} alt="error" />
                  </center> </div>
        
    )
}

function GreentingBinjai() { //anak
    return (
        <div> 
        <small>Salam dari Tadi</small>
 
        </div>
    )
    
}

function QuoteText() {
    const text = "Mulutmu Harimau?";
    const text2 = "Aku ingin berubah";
    return (
        <div>
            <hr/>
            <p>{text.toLowerCase()}</p>
            <p>{text2.toUpperCase()}</p>
   
        </div>
    )
}

function UserCard(props){
    return (
        <div>
            <hr/>
            <h3>Nama: {props.nama}</h3>
            <p>NIM: {props.nim}</p>
            <p>Tanggal: {props.tanggal}</p>
            <p>Hobi: {props.hobi}</p>
        </div>
    )
}