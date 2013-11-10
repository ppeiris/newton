{"version":3,"file":"newton.js","sources":["src/body.js","src/distanceconstraint.js","src/edge.js","src/frame.js","src/layer.js","src/lineargravity.js","src/material.js","src/particle.js","src/pixirenderer.js","src/radialgravity.js","src/rectangle.js","src/renderer.js","src/simulator.js","src/vector.js"],"names":["Newton","Body","material","this","particles","edges","constraints","simulator","undefined","simParticles","simEdges","simConstraints","prototype","addTo","Error","push","apply","addParticle","particle","Particle","Array","slice","call","arguments","addEdge","edge","Edge","addConstraint","constraint","DistanceConstraint","each","method","args","i","length","callback","exports","p1","p2","distance","resolve","pos1","position","pos2","diff","clone","sub","getLength","factor","correction","scale","correct","Material","simple","compute","_rect","Rectangle","COLLISION_TOLERANCE","getAbc","x1","y1","x2","y2","a","b","c","anchor","vector","angle","getAngle","normal","turnLeft","unit","bounds","fromVectors","expand","getCoords","x","y","getRepelled","Vector","add","getProjection","dot","getDot","getAngleDelta","findIntersection","bounds1","bounds2","set","overlaps","l1","l2","det","contains","scratch","getReflection","velocity","restitution","dir","friction","velN","multScalar","velT","reflectedVel","timeoutFrame","currTime","Date","getTime","timeToCall","Math","max","lastTime","id","setTimeout","cancelTimeoutFrame","clearTimeout","window","vendors","isOpera","opera","navigator","userAgent","indexOf","Object","toString","HTMLElement","chrome","requestAnimationFrame","cancelAnimationFrame","frame","bind","cancelFrame","Layer","bodies","forces","watchedLayers","wrapper","container","cachedParticles","cachedForces","cachedEdges","respondTo","layers","addForce","force","wrapIn","rect","containBy","addBody","body","collect","ilen","j","jlen","watched","integrate","time","applyTo","constrain","wrap","contain","collide","LinearGravity","strength","falloff","rotate","setAngle","setStrength","accelerateVector","options","weight","maxVelocity","maxVelocitySquared","setMaxVelocity","v","mod","size","lastPosition","lastValidPosition","acceleration","randomDrag","random","randomness","pinned","colliding","copy","drag","min","getSquaredLength","zero","placeAt","moveBy","dx","dy","pin","setVelocity","subXY","right","left","bottom","top","newX","width","newY","height","applyForce","mass","getMass","getSquaredSpeed","attractSquare","m","minDist","delta","r","f","ratio","nearest","intersect","oldDistance","newDistance","partOfEdge","wall","bouncePoint","reflectedVelocity","rgbToHex","g","PixiRenderer","el","stage","PIXI","Stage","setInteractive","renderer","autoDetectRenderer","view","style","display","appendChild","infoText","Text","fill","font","addChild","graphics","Graphics","sim","clear","drawParticles","drawEdges","drawForces","setText","fps","render","lineStyle","RadialGravity","beginFill","drawCircle","endFill","pos","last","brightness","moveTo","lineTo","setLocation","v1","v2","amount","Renderer","ctx","getContext","drawConstraints","drawCounts","drawFPS","save","fillStyle","fillRect","restore","lineWidth","strokeStyle","beginPath","arc","PI","lineCap","join","stroke","closePath","particleCount","edgeCount","fillText","text","noop","Simulator","preSimulator","integrationFps","iterations","step","_step","running","frames","countTime","countInterval","accumulator","simulationStep","start","now","stop","simulate","entity","newLayer","toFixed","mult","multVector","reverse","div","scalar","turnRight","sin","cos","getCross","sqrt","atan2"],"mappings":"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"}