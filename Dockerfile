#Base image taken from:https://github.com/cypress-io/cypress-docker-images
FROM cypress/browsers:node16.5.0-chrome94-ff93
#Create the folder where our project will be stored
RUN mkdir/my-cypress-project
#We make it our workdirectory
WORKDIR /my-cypress-project

#Let's copy the essential files that we MUST use to run our scripts.
COPY ./package.json .
COPY ./cypress.json .
COPY ./cypress ./cypress
#Install the cypress dependencies in the work directory
RUN pm install
#Executable commands the container will use[Exec Form]
ENTRYPOINT ["npx" , "cypress", "run"]
#With CMD in this case, we can specify more parameters to the last entrypoint.