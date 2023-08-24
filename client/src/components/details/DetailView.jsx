import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import {getProductDetails} from '../../redux/actions/productActions';
import { Box,Typography,styled,Grid } from '@mui/material';
import ActionItem from "./ActionItem";
import ProductDetail from "./ProductDetail";

const Component = styled(Box)`
   background: #F2F2F2;
   margin-top: 55px;
`;

const Container = styled(Grid)(({ theme }) => ({
   background: '#FFFFFF',
   display: 'flex',
   [theme.breakpoints.down('md')]: {
       margin: 0
   }
}))

const RightConatainer = styled(Grid)`
margin-top: 55px;
padding-left: 25px;
&> p {
   margin-top: 10px
}
`;

const DetailView = () =>{
    const dispatch = useDispatch();
    const { id } = useParams();

    const {loading, product} = useSelector(state => state.getProductDetails);

    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'


    useEffect(() => {
        if(product && id !== product.id)
             dispatch(getProductDetails(id))
    },[dispatch,id, product, loading])

    console.log(product);

    return(
       <Component>
        {
            product && Object.keys(product).length &&
            <Container container>
                 <Grid item lg={4} md={4} sm={8} xs={12}>
                    <ActionItem product={product} />
                 </Grid>
                 <RightConatainer item lg={8} md={8} sm={8} xs={12} >
                    
                        <ProductDetail product={product} />
                 </RightConatainer>
            </Container>
        }
       </Component>
    )
}

export default DetailView;