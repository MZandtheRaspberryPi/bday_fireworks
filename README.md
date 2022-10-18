# Happy Bday Website

## Building the App with Docker

go to the root folder of the repo  

```
docker build -t angular-bday-app -f web_app.Dockerfile ./happy-bday
docker run -it --rm -p 4201:80 angular-bday-app
```  

and to push it:  

```
docker tag angular-bday-app:latest mzandtheraspberrypi/angular-bday-app:latest
```

running in the cloud

```
docker run -itd -p 80:80 --restart=always mzandtheraspberrypi/angular-app:latest
```

workaround for animation stuff: <https://github.com/angular/angular/issues/15798#issuecomment-305934289>

Getting docker logs
docker logs 07192b4ae59b >logs.txt
 
scp -i /path/to/key.pem ubuntu@ip-address:~/logs.txt ./logs.txt
 
 
