<template>
    <v-app class="bg-grey-lighten-4">
        <NavBar />

        <v-main>
            <div class="ma-3">
                <FullCalendar class="my-calendar" :options="calendarOptions" />
            </div>
        </v-main>
    </v-app>
</template>
  
<!-- <script>
import NavBar from '../components/NavBar.vue'
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import axios from 'axios';
import { useMainStore } from '@/stores/store';

export default {
    components: {
        FullCalendar,
        NavBar,
    },
    data() {
        return {
            calendarEvents: [],
            calendarOptions: {
                plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
                initialView: 'dayGridMonth',
                headerToolbar:{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth dayGridWeek listDay'
                },
                editable: true,
                selectable: true,
                weekends: true,
                dateClick: (arg) => {
                    console.log(arg.dateStr)
                },
                events: this.calendarEvents,
                // Add other options and event sources as neede
                
            }
        };
    },

    mounted(){
        this.fetchEvents();
    },

    // methods:{
    //     fetchEvents(){
    //         const store = useMainStore();
    //         const staffID = store.staffID;

    //         axios.get(`http://localhost:5045/getRecruitmentForCalendar/${staffID}`)
    //         .then(response => {
    //             console.log("API Response:", response.data); 
    //             this.setCalendarEvents(response.data);
    //             console.log("Formatted Events:", this.calendarEvents);
    //         })
    //         .catch(error => {
    //             console.error('Error fetching events:', error);
    //         })
    //     },
    // },
    // setCalendarEvents(data) {
    //     this.calendarEvents.splice(0, this.calendarEvents.length, ...data);
    // }

    methods: {
    fetchEvents() {
        const store = useMainStore();
        const staffID = store.staffID;

        axios.get(`http://localhost:5045/getRecruitmentForCalendar/${staffID}`)
        .then(response => {
            console.log("API Response:", response.data); 
            this.setCalendarEvents(response.data);
            console.log("Formatted Events:", this.calendarEvents);
        })
        .catch(error => {
            console.error('Error fetching events:', error);
        })
    },
    setCalendarEvents(data) {
        this.calendarEvents.splice(0, this.calendarEvents.length, ...data);
    }
}

};
</script> -->

<!-- <script>
import { defineComponent, ref, reactive, onMounted, watch } from 'vue';
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import axios from 'axios';
import NavBar from '../components/NavBar.vue'
import { useMainStore } from '@/stores/store';

export default defineComponent({
  components: {
    NavBar,
    FullCalendar,
  },
  setup() {
    const calendarEvents = ref([]); 

    const calendarOptions = reactive({
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      initialView: 'dayGridMonth',
      editable: true,
      selectable: true,
      selectMirror: true,
      dayMaxEvents: true,
      weekends: true,
      events: calendarEvents.value, 
    });

    // Fetch events on component mount
    const store = useMainStore();
    const staffID = store.staffID;
    onMounted(() => {
      axios.get(`http://localhost:5045/getRecruitmentForCalendar/${staffID}`)
        .then(response => {
          calendarEvents.value = response.data; 
          console.log(calendarEvents);
        })
        .catch(error => {
          console.error('Error fetching events:', error);
        });
    });

    return {
      calendarOptions,
      calendarEvents
    };
  },
  methods: {
  },
});
</script> -->

<script>
import { defineComponent, ref, reactive, onMounted, watch } from 'vue';
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import axios from 'axios';
import NavBar from '../components/NavBar.vue'
import { useMainStore } from '@/stores/store';

export default defineComponent({
  components: {
    NavBar,
    FullCalendar,
  },
  setup() {
    const calendarEvents = ref([]); 

    const calendarOptions = reactive({
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      initialView: 'dayGridMonth',
      editable: true,
      selectable: true,
      selectMirror: true,
      dayMaxEvents: true,
      weekends: true,
      events: [] // initially empty
    });

    const store = useMainStore();
    const staffID = store.staffID;
    onMounted(() => {
      axios.get(`http://localhost:5045/getRecruitmentForCalendar/${staffID}`)
        .then(response => {
          console.log("Fetched events:", response.data);
          calendarEvents.value = response.data;
          calendarOptions.events = calendarEvents.value; // Update the calendarOptions to trigger reactivity
          console.log("Updated calendar events:", calendarEvents.value);
        })
        .catch(error => {
          console.error('Error fetching events:', error);
        });
    });

    return {
      calendarOptions,
      calendarEvents
    };
  }
});
</script>


<style>
.my-calendar {
    width: 100%;
    max-width: 1450px;
    height: 700px;
    margin: auto;
}
</style>

