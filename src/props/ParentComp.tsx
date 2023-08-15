import React from 'react'
import ChildComp from './ChildComp'
import TRFinansButton from './TRFinansButton'

function ParentComp() {

    //props olarak string, number, object, array HATTA function gönderebiliriz.

    const hello = () => {
        alert("PARENT COMP FUNCTION!!")
    }

    return (<>
    <TRFinansButton hello={hello} title="Hesaplama Araçları"/>
    <ChildComp title="Türkiye Finans" countries={["İstanbuş", "İzmir", "Ankara"]} name="Çağatay" surname="Yıldız" age={18} />
    </>
    )
}

export default ParentComp