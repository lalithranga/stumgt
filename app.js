function AddStudent() {
    let name=document.getElementById("IdName").value;
    let age=document.getElementById("IdAge").value
    let subject=document.getElementById("IdSubject").value
    let subject1=document.getElementById("IdSubject1").value

    console.log(name,age,subject,subject1);
    
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    const raw = JSON.stringify({
      "name": name,
      "age": age,
      "subject": subject,
      "subject1": subject1
    });
    
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    
    fetch("http://localhost:8080/add_data", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        loadfactor();
    })
      .catch((error) => console.error(error));

}



function loadfactor(params) {



    let Idtable = document.getElementById("IdTable");

let tblbody = "";


fetch("http://localhost:8080/get_data")
    .then(res => res.json())
    .then(data => {
        let tblbody = '';
        data.forEach(element => {
            tblbody += `
                <tr>
                    <td>${element.name}</td>
                    <td>${element.age}</td>
                    <td>${element.subject}</td>
                    <td>${element.subject1}</td>
                </tr>`;
        });
        document.getElementById("tblbody").innerHTML = tblbody;
    })
    .catch(error => console.error('Error fetching data:', error));
    
}
