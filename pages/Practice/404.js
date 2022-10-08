import React, {useEffect} from 'react';
import Link from "next/link";
import {useRouter} from "next/router";

const Error= () => {
	const router=useRouter()
	const handleHome=()=>{
		// console.log("router",router)
		router.push("/Index")
	}
	useEffect(()=>{
		const timer=setTimeout(()=>{
			router.push("/Index")
		},5000)
		return ()=>clearTimeout(timer)
	},[])
	return (
		<div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center"}}>
			404
			<div>Page Not Found</div>
			<Link href="/Home" style={{cursor:"pointer"}}>
				Back To Index
			</Link>
			
			<button onClick={handleHome}>Back To Index Page using button</button>
		</div>
	);
};

export default Error;