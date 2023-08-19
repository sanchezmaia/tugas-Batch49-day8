function submitData() {
  let name = document.getElementById("input-name").value;
  let email = document.getElementById("input-email").value;
  let phone = document.getElementById("input-phone").value;
  let subject = document.getElementById("input-subject").value;
  let message = document.getElementById("input-message").value;

  // console.log(name);
  // console.log(email);
  // console.log(phone);
  // console.log(subject);
  // console.log(message);

  if (name == "") {
    return alert("jangan lupa isi");
  } else if (email == "") {
    return alert("jangan lupa isi");
  } else if (phone == "") {
    return alert("jangan lupa isi ");
  } else if (subject == "") {
    return alert("jangan lupa dipilih");
  } else if (message == "") {
    return alert("jangan lupa tulis");
  }

  let emailReceiver = "sanchodedeusmaiatiypkp@gmail.com";

  let a = document.createElement("a");

  a.href = `mailto:${emailReceiver}?subject=${subject}&body=Halo, nama saya ${name}, ${message}, Silakan hubungi saya pada nomor ${phone}`;
  a.click();
}
