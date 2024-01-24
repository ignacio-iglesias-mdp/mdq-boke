# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
# mdq-boke

Manual para trabajo en equipo con Git

Como clonar repositorio desde cero 
	Ir a link de github, en la carpeta raiz (haciendo click en el nombre grande), hacer click en code y copiar 	dirección.
	
	Ir a carpeta donde quieran trabajar el proyecto (Que no se llame igual ni este en el escritorio) y abrir 	terminal. Importante revisar donde apunta terminal.

	Si el proyecto esta bien instalado, abrir la carpeta en VSC y en la consola escribir npm i

	Si esta todo bien, correr npm run dev y abrir la dirección que aparece en la consola

----------------------------------------------------------------------------------------------------

Como trabajar en equipo:
	Cada vez que se hace una nueva tarea crear una nueva rama (CON NOMBRE COHERENTE), como creo rama:
		Primero ubicarme en rama main (existe posibilidad de que yo haya hecho una tarea antes, y este en 		otra rama. Para ubicarme voy a escribir en consola git checkout main
		Segundo escribir git pull origin main (Tomo los últimos cambios, para asegurarme que estoy 			actualizado)
		Tercero: Creo rama, en consola: git checkout -b "hacerLogin" (Tiene reglas, como por ejemplo no se 		pueden usar espacios). Si no estoy usando bash en la terminal, lo corroboro escribiendo git 			status.
		
		Cuarto: Trabajo en mi tarea

		Quinto: 
			OPCIÓN 1: 
			Escribir en consola: 
				git add .
				git commit -m "DESCRIPCIÓN DE MI TAREA"
				git push
				Va a aparecer cartel de que no se puede, copiar la linea que dice push y tocar 					enter (solo la primera vez, despues se puede hacer push directamente)
			OPCIÓN 2:
			Panel de control de versiones de Git en VSC:  
			En panel de git en changes hacer click en botón + , despues escribir en el cuadro la 				descripción de lo que se hizo, despues tocar el botón azul una vez más.
		
		Sexto: AVISAR QUE SE HIZO PR, y mandar link a donde corresponda. Una vez que se acepte el PR 				avisar al grupo que hagan pull de la última versión, esten donde esten y solucionar 				conflictos de merge antes de seguir trabajando. 
			Como hacer pull: en consola escribir git pull origin main.

		Ideal: Una vez que se acepto PR ir a página de github, y eliminar rama que ya no se usa
