function startGame(){

    var name0 = document.querySelector('#name-0').value;
    var name1 = document.querySelector('#name-1').value;
    var name2 = document.querySelector('#name-2').value;
    var name3 = document.querySelector('#name-3').value;
    names = [name0, name1, name2, name3];
    
    var add0 = document.querySelector('#address-0').value;
    var add1 = document.querySelector('#address-1').value;
    var add2 = document.querySelector('#address-2').value;
    var add3 = document.querySelector('#address-3').value;
    address = [add0, add1, add2, add3];
    
    var money0 = document.querySelector('#score-0').value;
    var money1 = document.querySelector('#score-1').value;
    var money2 = document.querySelector('#score-2').value;
    var money3 = document.querySelector('#score-3').value;
    money = [money0, money1, money2, money3];

    var val = [name0, name1, name2, name3, add0, add1, add2, add3, money0, money1, money2, money3];
    
    //export default val;
    //window.localStorage.setItem("val", 12);
    //window.sessionStorage.setItem("val", "12");
}

var names, address, money;

//money = [2000, 1000, 3000, 4000];

/*import React from 'react';

const Inline = () =>{
    const wrapper = {
        width: '1000px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#fff',
        boxShadow: '0px 10px 50px rgba(0, 0, 0, 0.3)',
        overflow: 'hidden',
    }
    const button = {
        position: 'absolute',
        width: '200px',
        left: '50%',
        transform: 'translateX(-50%)',
        color: '#555',
        background: 'none',
        border: 'none',
        fontFamily: 'Lato',
        fontSize: '32px',
        textTransform: 'uppercase',
        cursor: 'pointer',
        fontWeight: '300',
        transition: 'background-color 0.3s, color 0.3s'
    }
    return (
    <div style={wrapper}>
        <h1 style={{color: '#0d1a26', fontWeight: 400}}>Inline.</h1>
        <button style={button}>Button</button>
    </div>
    );
};
export default Inline;*/

//<button>
document.querySelector('.btn-start').addEventListener('click', startGame);
//</button>