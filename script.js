
let mainBalance= document.getElementById('mainBalance')
const currentDate = new Date();
        

document.getElementById("donatebtn").addEventListener('click', function(){
    let totaldonate= document.getElementById('totaldonate').innerText;
    let input = document.getElementById('ammountinput').value;
    if(input>Number(mainBalance.innerText)){
        alert("input some valid number");
    }else{
        let updateDonate= Number(input)+Number(totaldonate)
     document.getElementById('totaldonate').innerText=updateDonate
     if(input>0){
        mainBalance.innerText = mainBalance.innerText-Number(input)
        my_modal_5.showModal() 
        const div=document.createElement('div')
        div.classList.add('p-8', 'mb-6')
        div.innerHTML=`
            <p class="mb-4 font-bold text-xl " >${input} Taka is Donated for famine-2024 at Feni, Bangladesh</p>
            <p>Date: ${currentDate}</p>
        `
        document.getElementById('historyDetails').appendChild(div)
        

    }else{
        alert("input some valid number");
    }
    }
     document.getElementById('ammountinput').value=''
})


document.getElementById("nuakhali").addEventListener('click', function(){
    let totaldonate= document.getElementById('nouakhaliDonate').innerText;
    let input = document.getElementById('nuakhaliinput').value;
    if(input>Number(mainBalance.innerText)){
        alert("input some valid number");
    }else{
        let updateDonate= Number(input)+Number(totaldonate)
     document.getElementById('nouakhaliDonate').innerText=updateDonate
     if(input>0){
        mainBalance.innerText = mainBalance.innerText-Number(input)
        my_modal_5.showModal() 
        const div=document.createElement('div')
        div.classList.add('p-8', 'mb-6')
        div.innerHTML=`
            <p class="mb-4 font-bold text-xl " >${input} Taka is Donated for Flood Relief in Noakhali,Bangladesh</p>
            <p>Date: ${currentDate}</p>
        `
        document.getElementById('historyDetails').appendChild(div)
    }else{
        alert("input some valid number");
    }
    }
     document.getElementById('nuakhaliinput').value=''
})


document.getElementById("qutabtn").addEventListener('click', function(){
    let totaldonate= document.getElementById('quotaTotalDonate').innerText;
    let input = document.getElementById('qutainput').value;
    if(input>Number(mainBalance.innerText)){
        alert("input some valid number");
    }else{
        let updateDonate= Number(input)+Number(totaldonate)
     document.getElementById('quotaTotalDonate').innerText=updateDonate
     if(input>0){
        mainBalance.innerText = mainBalance.innerText-Number(input)
        my_modal_5.showModal()
        const div=document.createElement('div')
        div.classList.add('p-8', 'mb-6')
        div.innerHTML=`
            <p class="mb-4 font-bold text-xl " >${input} Taka is Donated for Aid for Injured in the Quota Movement</p>
            <p>Date: ${currentDate}</p>
        `
        document.getElementById('historyDetails').appendChild(div) 
    }else{
        alert("input some valid number");
    }
    }
     document.getElementById('qutainput').value=''
})


document.getElementById('history').addEventListener('click', function(){
    
    document.querySelector('#history').classList.add('bg-[#B4F461]');
    document.querySelector('#donation').classList.remove('bg-[#B4F461]');
    
    document.querySelector('.donationNeed').classList.add('hidden');
    document.querySelector('#historyDetails').classList.remove('hidden');
})


document.getElementById('donation').addEventListener('click', function(){
    document.querySelector('.donationNeed').classList.remove('hidden');
    
    document.querySelector('#history').classList.remove('bg-[#B4F461]');
    document.querySelector('#donation').classList.add('bg-[#B4F461]');
    document.querySelector('#historyDetails').classList.add('hidden');
})



