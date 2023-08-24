import { useEffect } from "react";

import Banner from "./Banner";
import NavBar from "./NavBar";
import Slide from "./Slide";
import MidSlide from "./MidSlide";
import MidSection from "./MidSection";

import {styled, Box} from "@mui/material";
import { getProducts } from "../../redux/actions/productActions";
import { useDispatch,useSelector } from "react-redux";

const Component = styled(Box)`
    padding: 10px;
    background: #F2F2F2;
`


const Home = () =>{
    const {products} = useSelector(state => state.getProducts)

    const dispatch = useDispatch();

    useEffect(() => {
         dispatch(getProducts())
    }, [dispatch])
    return (
        <>
              <NavBar />
              <Component>
                 <Banner />
                 <MidSlide products={products} title="Deal of the day" timer={true}/>
                 <MidSection />
                 <Slide products={products}  title="Discount for you" timer={false}/>
                 <Slide products={products} title="Suggesting items" timer={false}/>
                 <Slide products={products} title="Top selections" timer={false}/>
                 <Slide products={products} title="Recommended items" timer={false}/>
                 <Slide products={products} title="Season's top picks" timer={false}/>
                 <Slide products={products} title="Top deals on Accessories" timer={false}/>
              </Component>
              
        </>
        
    )
}

export default Home;