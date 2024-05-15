import { Canvas, useLoader, useFrame, useThree } from "@react-three/fiber"
import { TextureLoader } from 'three';
import * as THREE from 'three';
import { MeshReflectorMaterial, Html, useProgress  } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import texture1 from "./1.png";  
import texture2 from "./2.png";  
import texture3 from "./3.png";  
import texture4 from "./4.png";  
import texture5 from "./5.png";  
/*import { useControls } from "leva"*/
import { useRef, useState, Suspense } from 'react';
import './App.css'

const LoadingScreen: React.FC = () => {
  const { progress } = useProgress();
  console.log('progress', progress);
  
  return (
    <Html>    
      <div id="loader">
        <h1>{Math.floor(progress)} % <span style={{opacity:"0%"}}>loaded</span></h1>
      </div>
    </Html>

  );
};

function Ground() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.6, 0]}>
    <planeGeometry args={[15, 15]} />
    <MeshReflectorMaterial
      blur={[300, 100]} // Applique un flou sur la réflexion pour un effet plus réaliste
      resolution={2048} // Définit la résolution de la texture de réflexion
      mixBlur={1} // Niveau de mélange du flou
      mixStrength={10} // Intensité de la réflexion
      roughness={1} // Rugosité de la surface
      depthScale={0.8} // Échelle de profondeur, affecte la perception de la profondeur dans la réflexion
      minDepthThreshold={0.4} // Seuil minimal de profondeur pour la réflexion
      maxDepthThreshold={1.4} // Seuil maximal
      color="#ddd" // Couleur de base de la réflexion
      metalness={0.5} // Métallicité de la surface réfléchissante
      mirror={1}
    />
</mesh>
  )
}

interface Img1Props {
  setDisplay: React.Dispatch<React.SetStateAction<{display: string}>>;
}

function Img1({ setDisplay }: Img1Props) {
  const texture = useLoader(TextureLoader, texture1);

  const { camera } = useThree(); // Accès à la caméra
  const targetPosition = useRef(new THREE.Vector3(0, 0, 0));
  const moving = useRef(false);
  const initialPosition = useRef(new THREE.Vector3(0, 0, 10)); // Position initiale
  const moveToInitial = useRef(false); 
  const [isVisible, setIsVisible] = useState(true); // Ajout d'un état pour la visibilité

  const toggleCameraPosition = () => {
    setIsVisible(!isVisible); // Bascule la visibilité à chaque clic
    setDisplay({display: isVisible ? "none" : "block"}); // Mise à jour de la propriété display basée sur la visibilité
    moving.current = true;
    moveToInitial.current = !moveToInitial.current;
  };

  useFrame(() => {
    if (moving.current) {
        const destination = moveToInitial.current ? initialPosition.current : targetPosition.current;
        camera.position.lerp(destination, 0.05); // L'interpolation lisse vers la destination
        if (camera.position.distanceTo(destination) < 0.1) {
            moving.current = false; // Arrête le mouvement lorsque la caméra est assez proche de la destination
        }
    }
})



  return (
    <mesh position={[0,0,-5]} scale={[1, 1.5, 0.5]} rotation={[0, 0, 0]} onClick={toggleCameraPosition}  >
      <planeGeometry args={[2, 2]} />
      <meshStandardMaterial map={texture} transparent={true}/>
    </mesh>
  )
}

interface Img1Props {
  setDisplay: React.Dispatch<React.SetStateAction<{display: string}>>;
}

function Img2({ setDisplay }: Img1Props) {
  const texture = useLoader(TextureLoader, texture2);

  const { camera } = useThree(); // Accès à la caméra
  const targetPosition = useRef(new THREE.Vector3(-3, 0, 7));
  const moving = useRef(false);
  const initialPosition = useRef(new THREE.Vector3(0, 0, 10)); // Position initiale
  const moveToInitial = useRef(false); 
  const [isVisible, setIsVisible] = useState(true); // Ajout d'un état pour la visibilité

  const toggleCameraPosition = () => {
    setIsVisible(!isVisible); // Bascule la visibilité à chaque clic
    setDisplay({display: isVisible ? "none" : "block"}); // Mise à jour de la propriété display basée sur la visibilité
    moving.current = true;
    moveToInitial.current = !moveToInitial.current;
  };
  useFrame(() => {
    if (moving.current) {
        const destination = moveToInitial.current ? initialPosition.current : targetPosition.current;
        camera.position.lerp(destination, 0.05); // L'interpolation lisse vers la destination
        if (camera.position.distanceTo(destination) < 0.1) {
            moving.current = false; // Arrête le mouvement lorsque la caméra est assez proche de la destination
        }
    }
})

  return (
    <mesh position={[-4,0,4]} scale={[1, 1.5, 0.5]} rotation={[0, 1.2, 0]} onClick={toggleCameraPosition}  >
      <planeGeometry args={[2, 2]} />
      <meshStandardMaterial map={texture} transparent={true}/>
    </mesh>
  )
}

interface Img1Props {
  setDisplay: React.Dispatch<React.SetStateAction<{display: string}>>;
}

function Img3({ setDisplay }: Img1Props) {
  const texture = useLoader(TextureLoader, texture3);

  const { camera } = useThree(); // Accès à la caméra
  const targetPosition = useRef(new THREE.Vector3(-3, 0, 3));
  const moving = useRef(false);
  const initialPosition = useRef(new THREE.Vector3(0, 0, 10)); // Position initiale
  const moveToInitial = useRef(false); 
  const [isVisible, setIsVisible] = useState(true); // Ajout d'un état pour la visibilité

  const toggleCameraPosition = () => {
    setIsVisible(!isVisible); // Bascule la visibilité à chaque clic
    setDisplay({display: isVisible ? "none" : "block"}); // Mise à jour de la propriété display basée sur la visibilité
    moving.current = true;
    moveToInitial.current = !moveToInitial.current;
  };
  useFrame(() => {
    if (moving.current) {
        const destination = moveToInitial.current ? initialPosition.current : targetPosition.current;
        camera.position.lerp(destination, 0.05); // L'interpolation lisse vers la destination
        if (camera.position.distanceTo(destination) < 0.1) {
            moving.current = false; // Arrête le mouvement lorsque la caméra est assez proche de la destination
        }
    }
})

  return (
    <mesh position={[-3.6,0,-1.5]} scale={[1, 1.5, 0.5]} rotation={[0, 1.2, 0]} onClick={toggleCameraPosition}  >
      <planeGeometry args={[2, 2]} />
      <meshStandardMaterial map={texture} transparent={true}/>
    </mesh>
  )
}

interface Img1Props {
  setDisplay: React.Dispatch<React.SetStateAction<{display: string}>>;
}

function Img4({ setDisplay }: Img1Props) {
  const texture = useLoader(TextureLoader, texture4);

  const { camera } = useThree(); // Accès à la caméra
  const targetPosition = useRef(new THREE.Vector3(3, 0, 7));
  const moving = useRef(false);
  const initialPosition = useRef(new THREE.Vector3(0, 0, 10)); // Position initiale
  const moveToInitial = useRef(false); 
  const [isVisible, setIsVisible] = useState(true); // Ajout d'un état pour la visibilité

  const toggleCameraPosition = () => {
    setIsVisible(!isVisible); // Bascule la visibilité à chaque clic
    setDisplay({display: isVisible ? "none" : "block"}); // Mise à jour de la propriété display basée sur la visibilité
    moving.current = true;
    moveToInitial.current = !moveToInitial.current;
  };

  useFrame(() => {
    if (moving.current) {
        const destination = moveToInitial.current ? initialPosition.current : targetPosition.current;
        camera.position.lerp(destination, 0.05); // L'interpolation lisse vers la destination
        if (camera.position.distanceTo(destination) < 0.1) {
            moving.current = false; // Arrête le mouvement lorsque la caméra est assez proche de la destination
        }
    }
})

  return (
    <mesh position={[4,0,4]} scale={[1, 1.5, 0.5]} rotation={[0, -1.2 , 0]} onClick={toggleCameraPosition}  >
      <planeGeometry args={[2, 2]} />
      <meshStandardMaterial map={texture} transparent={true}/>
    </mesh>
  )
}

interface Img1Props {
  setDisplay: React.Dispatch<React.SetStateAction<{display: string}>>;
}

function Img5({ setDisplay }: Img1Props) {
  const texture = useLoader(TextureLoader, texture5);

  const { camera } = useThree(); // Accès à la caméra
  const targetPosition = useRef(new THREE.Vector3(3, 0, 3));
  const moving = useRef(false);
  const initialPosition = useRef(new THREE.Vector3(0, 0, 10)); // Position initiale
  const moveToInitial = useRef(false); 
  const [isVisible, setIsVisible] = useState(true); // Ajout d'un état pour la visibilité

  const toggleCameraPosition = () => {
    setIsVisible(!isVisible); // Bascule la visibilité à chaque clic
    setDisplay({display: isVisible ? "none" : "block"}); // Mise à jour de la propriété display basée sur la visibilité
    moving.current = true;
    moveToInitial.current = !moveToInitial.current;
  };
  useFrame(() => {
    if (moving.current) {
        const destination = moveToInitial.current ? initialPosition.current : targetPosition.current;
        camera.position.lerp(destination, 0.05); // L'interpolation lisse vers la destination
        if (camera.position.distanceTo(destination) < 0.1) {
            moving.current = false; // Arrête le mouvement lorsque la caméra est assez proche de la destination
        }
    }
})

  return (
    <mesh position={[3.6,0,-1.5]} scale={[1, 1.5, 0.5]} rotation={[0, -1.2, 0]} onClick={toggleCameraPosition}  >
      <planeGeometry args={[2, 2]} />
      <meshStandardMaterial map={texture} transparent={true}/>
    </mesh>
  )
}


interface ThreeSceneProps {
  setDisplay1: React.Dispatch<React.SetStateAction<{ display: string }>>;
  setDisplay2: React.Dispatch<React.SetStateAction<{ display: string }>>;
  setDisplay3: React.Dispatch<React.SetStateAction<{ display: string }>>;
  setDisplay4: React.Dispatch<React.SetStateAction<{ display: string }>>;
  setDisplay5: React.Dispatch<React.SetStateAction<{ display: string }>>;
}

function ThreeScene({ setDisplay1, setDisplay2, setDisplay3, setDisplay4, setDisplay5 }: ThreeSceneProps) {

  return (
    <Suspense fallback={<LoadingScreen />}>
    <Canvas id="Canvas_Main" style={{width: '100vw', height: '100vh'}} camera={{ position: [0, 0, 10], fov: 50 }} >
    <Suspense fallback={<LoadingScreen />}>
      <color attach="background" args={['#000']} />
      <directionalLight intensity={1.5} position={[0, 0, 5]} />
      <ambientLight intensity={1} />
      <Img1 setDisplay={setDisplay1}/>
      <Img2 setDisplay={setDisplay2}/>
      <Img3 setDisplay={setDisplay3}/>
      <Img4 setDisplay={setDisplay4}/>
      <Img5 setDisplay={setDisplay5}/>
    <Ground/>
    <EffectComposer>
      <Bloom
          luminanceThreshold={0.1}
          luminanceSmoothing={0.1}
          height={300} // Ajustez la taille si nécessaire
        />
      </EffectComposer>
      </Suspense>
    </Canvas>
    </Suspense>
  )
}

function App() {

  const [display1, setDisplay1] = useState({display: "none"});
  const [display2, setDisplay2] = useState({display: "none"});
  const [display3, setDisplay3] = useState({display: "none"});
  const [display4, setDisplay4] = useState({display: "none"});
  const [display5, setDisplay5] = useState({display: "none"});
  
  return (
    <div className='App'>
            <ThreeScene 
        setDisplay1={setDisplay1}
        setDisplay2={setDisplay2}
        setDisplay3={setDisplay3}
        setDisplay4={setDisplay4}
        setDisplay5={setDisplay5}
      />
      <div id="c1" className="text_container t2" style={display1}>
        <h1>Profile</h1><br />
        <p className="text">
          Bonjour, je me nomme Timothée Ren. J'ai 15 ans, actuellement au collège. Je suis intéressé par l'informatique (code, 3D, Linux), et ma spécialité et la programmation web (client/serveur). <br /><br />
          <h2>Softs Skills</h2><br /><br />
          <span className="bar_container">Curisité <div className="bar" id="bar5"></div></span> <br /><br />
          <span className="bar_container">Apprentisage <div className="bar" id="bar6"></div></span> <br /><br />
          <span className="bar_container">Adaptation <div className="bar" id="bar7"></div></span> <br /><br />
        </p>
      </div>
      <div id="c2" className="text_container t2" style={display2}>
      <h1>HTML/CSS</h1><br />
        <p className="text">
          - Effet de transition <br /><br />
          - Animation @keyframes <br /><br />
          - Flexs-Boxs <br /><br />
          - Connaissance de différents effets de style (glass effect, neon effect) <br /><br />
          - Responsive Design <br /><br />
        </p>
      </div>
      <div id="c3" className="text_container t2" style={display3}>
      <h1>JavaScript</h1><br />
        <p className="text">
          - Récupérer ou modifier un contenu HTML depuis le JS <br /><br />
          - Modifier une propriété CSS depuis le JS <br /><br />
          - Réaliser des animations <br /><br />
          - Traiter des chaînes de caractères ou d’autre type de variables <br /><br />
          - Gestion de stockage local, de session, ou de cookies <br /><br />
          - Se servir d’Ajax (Envoi de requête et réception des réponses) <br /><br />
          - Connaissance de frameworks connue (ElectronJS, ReactJS, NodeJS) <br /><br />
        </p>
        <h2>Library & Framework</h2> <br />
        
         <span className="bar_container">React <div className="bar" id="bar1"></div></span> <br /><br />
         <span className="bar_container">ThreeJS <div className="bar" id="bar2"></div></span> <br /><br />
         <span className="bar_container">Electron <div className="bar" id="bar3"></div></span> <br /><br />
         <span className="bar_container">R3F <div className="bar" id="bar4"></div></span> <br /><br />
      </div>
      <div id="c4" className="text_container t1" style={display4}>
      <h1>PHP</h1><br />
        <p className="text">
        - Savoir traiter des chaînes de caractères ou d’autre type de variables <br /><br />
        - Gestion de stockage local, de session, ou de cookies <br /><br />
        - Stockage de données dans une base données <br /><br />
        - Gestion des utilisateurs MySQL <br /><br />
        - Utiliser des commandes SQL ou passer par l’interface PhpMyAdmin. <br /><br />
        - Programmation Orienté Objet <br /><br />
        </p>
      </div>
      <div id="c5" className="text_container t1" style={display5}>
      <h1>OS & Réseaux</h1><br />
        <p className="text">
        - Réaliser des scripts simples <br /><br />
        - Effectuer des commandes systèmes (comme le démarrage et l’extinction de démons) <br /><br />
        - Modifier l’environnement de bureau <br /><br />
        - Gérer des paquets APT <br /><br />
        - Créer, modifier, ou supprimer des partitions systèmes <br /><br />
        - Connaissance de plusieurs systèmes d’exploitation Linux : <br /><br />
        : Ubuntu, Linux Mint, Kali Linux, Parrot OS, BlackArch, Elementary OS <br /><br />
        </p>
      </div>
    </div>
  )
}

export default App
//      <meshStandardMaterial map={texture} transparent={true} />