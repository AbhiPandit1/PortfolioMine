import React, { useEffect } from 'react'
import * as THREE from 'three';
import "./Home.css"
import moonImage from "../../Images/moon.png"
import venusImage from "../../Images/venus.png"
import spaceImage from "../../Images/space.png"
import {Typography} from "@mui/material";
import Timeline from '../Timeline/Timeline.jsx';



const Home = () => {
    
    useEffect(()=>{

        const textureLoader=new THREE.TextureLoader()
        const moonTexture=textureLoader.load(moonImage)
        const venusTexture=textureLoader.load(venusImage)
        const spaceTexture=textureLoader.load(spaceImage)






        const scene=new THREE.Scene()
        const camera =new THREE.PerspectiveCamera(50,window.innerWidth/window.innerHeight,0.1,1000)

        //const Renderer
        const canvas=document.querySelector(".homeCanvas")
        const renderer=new THREE.WebGLRenderer({canvas})

        const moonGeometry=new THREE.SphereGeometry(3,64,64)
        const moonMaterial = new THREE.MeshStandardMaterial( { map:moonTexture } );
        const moon = new THREE.Mesh( moonGeometry, moonMaterial );
        

        //venus
        const venusGeometry=new THREE.SphereGeometry(4,64,64)
        const venusMaterial = new THREE.MeshBasicMaterial( { map:venusTexture } );
        const venus = new THREE.Mesh( venusGeometry, venusMaterial );
        
        

        
        
        
        const pointLight=new THREE.PointLight(0xffffff ,1)
        const pointLight2=new THREE.PointLight(0xffffff ,0.4)

        pointLight.position.set(8,5,5);
        pointLight2.position.set(8,5,5);




        
        scene.add( moon );
        scene.add(pointLight)
        scene.add(pointLight2)
        scene.add(venus)
        scene.background=spaceTexture


        const constSpeed=0.01

        window.addEventListener("mousemove",(e)=>{
            if (e.clientX<=window.innerWidth/2){
                moon.rotation.x-=constSpeed;
                moon.rotation.y+=constSpeed;
                venus.rotation.x-=constSpeed;
                venus.rotation.y+=constSpeed;
            }
            if (e.clientX>window.innerWidth/2){
                moon.rotation.x-=constSpeed;
                moon.rotation.y-=constSpeed;
                venus.rotation.x-=constSpeed;
                venus.rotation.y-=constSpeed;
            }
            if (e.clientY>window.innerHeight/2){
                moon.rotation.x-=constSpeed;
                moon.rotation.y+=constSpeed;
                venus.rotation.x-=constSpeed;
                venus.rotation.y+=constSpeed;
            }
            if (e.clientY<=window.innerWidth/2){
                moon.rotation.x-=constSpeed;
                moon.rotation.y-=constSpeed;
                venus.rotation.x-=constSpeed;
                venus.rotation.y-=constSpeed;
            }
        })

        venus.position.set(8,5,5)
        camera.position.set(4,4,8)
        
       
        camera.position.z = 10;
        const animate =()=>{
            requestAnimationFrame(animate)
            
            moon.rotation.y+=0.01
            venus.rotation.y+=0.01
            renderer.setSize(window.innerWidth,window.innerHeight);
            renderer.render(scene,camera)
    }


    animate()

 },[])
  return (
    <div className='home'>
       
     <canvas className='homeCanvas'></canvas>

     <div className="homeContainer">
        <Typography varient="h3">TIMELINE</Typography>
        <Timeline timelines={[1,2,3,4]}/>
     </div>
    </div>
  )
}

export default Home
