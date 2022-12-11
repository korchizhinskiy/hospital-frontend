import { Component, createEffect, createResource, createSignal, For } from 'solid-js';

const [doctor, SetDoctor] = createSignal()
const [repos, setRepos] = createSignal([])


const DoctorsList: Component = () => {
  createEffect(async () => {
    await fetch("http://127.0.0.1:8000/api/doctor/?format=json")
      .then((responce) => {
        responce.json().then((data) => {
          setRepos(data)
          console.log(data)
        })
        return;
      })



  })

  return (
    <section class="doctors">
      <div class="patient_name">
        <For
          each={repos()}>{
            (doctor) => <a href='#' class='doctor _text-header-link'>
              {doctor.doctor_last_name} {doctor.doctor_first_name} {doctor.doctor_second_name}</a>
          }
        </For>
        <a href="#" class="doctor _text-header-link">
        </a>
      </div>
    </section>
  )
}

export default DoctorsList;
