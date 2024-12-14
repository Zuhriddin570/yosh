function calculateAge() {
    const birthDate = document.getElementById("birthDate").value;
    if (!birthDate) {
        document.getElementById("result").textContent="Iltimos,tug'ilgan sanagizni kiriting!";
        return;
    }   
    const birthDateObj = new Date(birthDate);
    const today =new Date();

    let age = today.getFullYear() - birthDateObj.getFullYear();
    const m = today.getMonth();

    if( m < 0 || (m===0 && today.getDate()< birthDateObj.getMonth())){
        age--;
    }

    document.getElementById("result").textContent=`Sizning yoshingiz: ${age}yosh`;
}