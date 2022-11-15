import React from 'react'
import {useParams} from 'react-router-dom'
import NotFound from './components/NotFound'

const generatepage = (pageNam) => {
    const component = () => require(`./pages/${pageNam}`).default

    try {
        return React.createElement(component())
    }catch (err){
        return <NotFound></NotFound>
    }
}

const PageRender = () => {
    const {page, id} = useParams()
    let pageNam = "";
    if(id) {
        pageNam = `${page}/[id]`
    }else{
        pageNam=`${page}`
    }
    console.log(pageNam)
    return generatepage(pageNam)
}

export default PageRender