# **Para lanzar en modo desarrollo:**

## **EN UNA TERMINAL**
```
cd reloj/your-clock
```
```
npm run devbabel
```
## **EN OTRA TERMINAL**
```
cd reloj/frontend-vue
```
```
npm run serve
```

abrir http://localhost:8080/


**NOTA:** Si se usa el locahost:3000 se usara en modo produccion, por lo cual no tomara todas las API's de desarrollo sino las de produccion, es decir, las desplegadas en heroku

-------------------------------------------------------------

# **Para lanzar en modo produccion**


## **EN UNA TERMINAL**
```
cd reloj/frontend-vue
```
```
npm run build
```

## **EN UN ADMINISTRADOR DE ARCHIVOS**
```
Esperar a que termine de construir el proyecto, luego ir a la carpeta frontend-vue/dist y copiar todos los archivos dentro de esta
```
```
Luego ir a reloj/your-clock/public y pegar los archivos (reemplazar los que ya existen si es necesario)
```

## **EN OTRA TERMINAL**
```
cd reloj/your-clock
```
```
git add .
```
```
git commit -m "descripcion del commit"
```
```
git push heroku master
```

abrir https://your-clock.herokuapp.com/

**NOTA:** esto hara un push al repositorio de heroku no al repositorio de github, es decir que solo desplegara el contenido de la carpeta "your-clock"

-------------------------------------------------------------

# **Para desplegar en el repositorio de github**

## **EN UNA TERMINAL**
```
cd reloj
```
```
git add .
```
```
git commit -m "descripcion del commit"
```
```
git push
```

