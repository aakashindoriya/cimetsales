export type bannerApiresponse ={
    id:number;
    title:string;
    price:number;
    category:string;
    description:string;
    image:string;
}

export type CartItem={
    product:bannerApiresponse;
    quantity:number
}