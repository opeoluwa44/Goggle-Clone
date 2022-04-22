const searchInput = document.querySelector("input")
const searchBtn = document.querySelector(".search-btn")
const searchIcon = document.querySelector(".search")
const appMenu = document.querySelector(".hover")
const nav = document.querySelector(".apps")


/*
function search(){
    const input = searchInput.value
    searchBtn.href = `https://www.google.com/search?q=${input}&sxsrf=APq-WBsWBEKNTNxEh9bf5Ym22sM-yuljow%3A1650364765806&source=hp&ei=XZFeYvDBL9HSa-f3vMgN&iflsig=AHkkrS4AAAAAYl6fbTRSEvP5F2VFWH7sNPIK4RTq6cRX&ved=0ahUKEwiw5PTs95_3AhVR6RoKHec7D9kQ4dUDCAc&uact=5&oq=${input}&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyBAgjECcyBAgjECcyCAgAEIAEELEDMgUIABCABDIFCAAQgAQyCwgAELEDEIMBEIsDMgsIABCxAxCDARCLAzIFCAAQgAQyCAgAELEDEIMBOgcIIxDqAhAnOggILhDUAhCRAjoFCC4QkQI6BQgAELEDOgUILhCxAzoECAAQA1DOCFitEWCeFmgBcAB4AIABiAKIAYIGkgEDMi0zmAEAoAEBsAEKuAEB&sclient=gws-wiz`

}

searchBtn.addEventListener("click", search)

document.addEventListener("keydown", (e)=>{
    if(e.key === 'Enter'){
        search()
    }
})*/




searchBtn.addEventListener("click", ()=>{
    const input = searchInput.value
    searchBtn.href = `https://www.google.com/search?q=${input}&sxsrf=APq-WBsWBEKNTNxEh9bf5Ym22sM-yuljow%3A1650364765806&source=hp&ei=XZFeYvDBL9HSa-f3vMgN&iflsig=AHkkrS4AAAAAYl6fbTRSEvP5F2VFWH7sNPIK4RTq6cRX&ved=0ahUKEwiw5PTs95_3AhVR6RoKHec7D9kQ4dUDCAc&uact=5&oq=${input}&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyBAgjECcyBAgjECcyCAgAEIAEELEDMgUIABCABDIFCAAQgAQyCwgAELEDEIMBEIsDMgsIABCxAxCDARCLAzIFCAAQgAQyCAgAELEDEIMBOgcIIxDqAhAnOggILhDUAhCRAjoFCC4QkQI6BQgAELEDOgUILhCxAzoECAAQA1DOCFitEWCeFmgBcAB4AIABiAKIAYIGkgEDMi0zmAEAoAEBsAEKuAEB&sclient=gws-wiz`

})

searchIcon.addEventListener("click", ()=>{
    searchInput.focus()
})

appMenu.addEventListener("click", ()=>{
    visibility = nav.dataset.visible
    if(visibility==="false"){
        nav.dataset.visible = true
        
    }else{
        nav.dataset.visible=false
    }

})


