import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Experience from "./Experience"
import { Text } from '@react-three/drei'
import Quiz from "./Quiz"
import './App.css'

function App() {

  return (
    <div className="app">
      <Canvas>
        <color attach="background" args={["black"]}/>
        {/* <ambientLight/> */}
    <pointLight position={[1,2,3]} intensity={10}/>
    <Suspense fallback={()=><Text color="white">Loading NPC </Text>}>
        <Experience/>
      </Suspense>
      </Canvas>
      <Quiz/>
    </div>
  )
}

export default App
