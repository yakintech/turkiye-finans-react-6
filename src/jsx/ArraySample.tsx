import React from 'react'

function ArraySample() {

    var cities = ["İzmir", "İstanbul", "Ankara", "Aydın", "Bursa", "Diyarbakır"]

  return (<>
    <ul>
        {
            cities.map(item => <li>{item}</li>)
        }
    </ul>
  </>)
}

export default ArraySample
//Not: JSX içerisinde döngü olarak foreach veya for kullanılmaz SADECE MAP kullanılır

//https://www.w3schools.com/jsref/jsref_map.asp