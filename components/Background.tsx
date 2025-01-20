import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

const Background = () => {
  const mountRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    if (!mountRef.current) return
    
    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: "high-performance"
    })
    
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0xffffff, 0) // Make background transparent
    mountRef.current.appendChild(renderer.domElement)

    // Create floating objects
    const objects: THREE.Mesh[] = []
    const colors = ['#D8232A', '#128A2C', '#000000'] // NDC colors
    
    // Create different geometric shapes
    const geometries = [
      new THREE.OctahedronGeometry(1),
      new THREE.DodecahedronGeometry(1),
      new THREE.IcosahedronGeometry(1),
    ]

    // Create multiple objects with different shapes and colors
    for (let i = 0; i < 12; i++) {
      const geometry = geometries[i % geometries.length]
      const material = new THREE.MeshPhongMaterial({
        color: colors[i % colors.length],
        transparent: true,
        opacity: 0.4, // Reduced opacity for softer look
        shininess: 100,
        specular: new THREE.Color(colors[i % colors.length]),
      })
      
      const object = new THREE.Mesh(geometry, material)
      
      // Random position in a wider space
      object.position.set(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 10
      )
      
      // Smaller size for subtler effect
      const scale = 0.2 + Math.random() * 0.3
      object.scale.set(scale, scale, scale)
      
      objects.push(object)
      scene.add(object)
    }
    
    // Add lights
    const mainLight = new THREE.PointLight(0xffffff, 1.5, 50)
    mainLight.position.set(0, 5, 10)
    scene.add(mainLight)
    
    const secondaryLight = new THREE.PointLight(0xffffff, 0.8, 50)
    secondaryLight.position.set(0, -5, -10)
    scene.add(secondaryLight)
    
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4)
    scene.add(ambientLight)
    
    camera.position.z = 15
    
    // Animation
    let frame = 0
    const animate = () => {
      frame = requestAnimationFrame(animate)
      
      objects.forEach((object, index) => {
        // Slower rotation for more subtle movement
        object.rotation.x += 0.002 * (index % 2 + 1)
        object.rotation.y += 0.003 * ((index + 1) % 2 + 1)
        
        // Gentler floating motion
        object.position.y += Math.sin(Date.now() * 0.0008 + index) * 0.008
        object.position.x += Math.cos(Date.now() * 0.0008 + index) * 0.008
        
        // Keep objects within bounds
        if (Math.abs(object.position.y) > 10) object.position.y *= -0.9
        if (Math.abs(object.position.x) > 10) object.position.x *= -0.9
      })
      
      renderer.render(scene, camera)
    }
    animate()
    
    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', handleResize)
    
    // Cleanup
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', handleResize)
      mountRef.current?.removeChild(renderer.domElement)
      objects.forEach(object => {
        object.geometry.dispose()
        ;(object.material as THREE.Material).dispose()
      })
    }
  }, [])
  
  return (
    <div 
      ref={mountRef} 
      className="fixed top-0 left-0 w-full h-full -z-10 bg-white" 
    />
  )
}

export default Background 