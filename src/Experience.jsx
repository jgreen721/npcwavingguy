import { useAnimations, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import React from 'react'


const Character = ()=>{
    const img = useGLTF("./npcguy.glb");
    const {actions,mixer} = useAnimations(img.animations,img.scene);


    useFrame(()=>{
        img.animations.forEach(clip=>{
            // if(clip.name == "Death"){
                let action = mixer.clipAction(clip);
                action.play();
                // setTimeout(()=>setIsAnimating(false),2500)
            });
    })



    return (
        <group position={[.5,-3,0]}>
            <pointLight intensity={5} position={[-1,2,0]}/>
            <primitive scale={.5} rotation={[0,0,0]} object={img.scene}/>
        </group>
    )
}

const Experience = () => {
    
  return (
    <group>
        <Character/>
    </group>
  )
}

export default Experience