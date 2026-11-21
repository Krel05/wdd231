const getString = window.location.search;
const info = new URLSearchParams(getString);

document.querySelector("#details").innerHTML = `
    <p>Name: ${info.get("first")} ${info.get("last")}</p>
    <p>Email Address: ${info.get("email")}</p>
    <p>Phone Number: ${info.get("telephone")}</p>
    <p>Organization Name: ${info.get("organization-name")}</p>
    <p>Membership Level: ${info.get("membership")}</p>
    <p>Timestamp: ${info.get("timestamp")}</p>
`