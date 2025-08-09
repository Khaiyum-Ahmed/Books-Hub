import { toast } from "react-toastify";

const getStoredReadList = ()=>{
    // readList
    const storedListStr = localStorage.getItem('read-list');
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else{
        return [];
    }

}

const addToStoredReadList = (id)=>{
    const storedList = getStoredReadList();

    if(storedList.includes(id)){
        // already exists. do not add it
        toast( 'already exists in the read list')
    }
    else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListStr);
        toast('This Book is added to your read List')
    }
}


// add to wishList


const getstoredWishList = ()=>{
    const storedListStr = localStorage.getItem('wish-list');
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else{
        return [];
    }
}

const addToStoredWishList = (id)=>{
    const storedList = getstoredWishList();

    if(storedList.includes(id)){
        // already exists. do not add it
        toast( 'already exists in the read list')
    }
    else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('wish-list', storedListStr);
        toast('This Book is added to your Wish List')
    }
}




export {addToStoredReadList, addToStoredWishList, getStoredReadList, getstoredWishList}