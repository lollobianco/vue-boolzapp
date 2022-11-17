var app = new Vue(
	{
	  el: '#app',
		data:{
         contacts: [
            {
                name: 'Michele',
                avatar: './assets/img/avatar_1.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabiola',
                avatar: './assets/img/avatar_io.jpg',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: './assets/img/avatar_3.jpg',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro B.',
                avatar: './assets/img/avatar_4.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro L.',
                avatar: './assets/img/avatar_5.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Claudia',
                avatar: './assets/img/avatar_6.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Federico',
                avatar: './assets/img/avatar_7.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Davide',
                avatar: './assets/img/avatar_8.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received'
                    }
                ],
            }
         ],

         lastMessageText: '',

         chatMex: [],

         recipient: '',

         recipientAvatar: '',

         lastAccess: '',

         newMessageText: '', 

         searchText: '',

	  },

		methods:{
			
         chatSelector(element, index){

            this.chatMex = []
            this.recievedMex = []

            this.recipient = element.name
            this.recipientAvatar = element.avatar
            this.lastAccess = 'Ultimo accesso: ' + element.messages[element.messages.length - 1].date

            let message; 

            for(let i = 0; i < this.contacts.length; i++){

               if (i == index){

                  for(let j = 0; j < this.contacts[i].messages.length; j++){

                     let date = this.contacts[i].messages[j].date;
                     date = date.split(' ');

                     if(this.contacts[i].messages[j].status == 'sent'){

                        message = {message: this.contacts[i].messages[j].message, status: 'sent', date: date[1], lastAccess: this.lastAccess}

                     } else {

                        message = {message: this.contacts[i].messages[j].message, status: 'recieved', date: date[1], lastAccess: this.lastAccess}

                     }
                     
                     
                     this.chatMex.push(message)
                     
                     
                  }

               }

            }

            console.log(this.chatMex)

            console.log(this.recipient)

         },

        newMessage(){

           let message;
           let botMessage;
           let date = new Date();
           let hour = date.getHours();
           let minutes = date.getMinutes();
           let hourMinutes = '';

           if(minutes < 10){
            
            hourMinutes = hour + ':' + 0 + minutes;

           } else{

            hourMinutes = hour + ':' + minutes;

           }


           setTimeout(() => this.lastAccess = 'Online', 1000);
           setTimeout(() => this.lastAccess = 'Sta scrivendo...', 2000);
           

           message = {message: this.newMessageText, status: 'sent', date: `${hourMinutes}`};
           botMessage = {message: 'Ok!', status: 'recieved', date: `${hourMinutes}`};

           this.chatMex.push(message)

           setTimeout(() => this.chatMex.push(botMessage), 3000);
           setTimeout(() => this.lastAccess = 'Online', 3800);
           setTimeout(() => this.lastAccess = `Ultimo accesso oggi alle: ${hourMinutes}`, 4800);
           


           this.contacts.forEach((element, index) => {

            if(element.name == this.recipient){

               element.messages.push(message)

               setTimeout(() => element.messages.push(botMessage), 3000);

            }

           })

           console.log(message)
           console.log(botMessage)


           message = '';
           this.newMessageText = '';

        },

         search(){

            console.log(this.searchText)

            let searchTexto = this.searchText;

            this.contacts.forEach((element, index) => {



                if (searchTexto == ''){

                    this.contacts[index].visible = true;

                } else {

                    if(element.name.includes(searchTexto) || element.name.toLowerCase().includes(searchTexto) || element.name.toUpperCase().includes(searchTexto) ){
                        element.visible = true
                    } else {
                        element.visible = false
                    }

                } 

            })

         },

        deleteMessage(element, index){

            // this.chatMex.splice(index, 1);

            this.contacts.forEach((elem, ind) => {

                if(elem.name == this.recipient){

                    this.contacts[ind].messages.forEach((message, number) => {

                        if(message.message == element.message){

                            console.log(message)
                            console.log(message.message)

                            // message.message.splice(index, 1);
                            this.chatMex.splice(index, 1);
                            this.contacts[ind].messages.splice(number, 1);


                            // console.log(this.contacts[ind].messages[number].message)

                        }

                    })

                }

            })
            // this.contacts[index].messages.splice(index, 1);

        },

		}
	}
);