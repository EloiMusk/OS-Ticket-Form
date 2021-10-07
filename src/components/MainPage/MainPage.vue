<template>
  <div id="MainPage">
    <b-card class="m-5">
      <h1>Shopbase Support</h1>
      <b-form class="row m-2" @submit="submit">
        <label for="firstName">Firstname</label>
        <b-form-input
            id="firstName"
            v-model="form.firstName"
        ></b-form-input>
        <label for="lastName">Lastname</label>
        <b-form-input
            id="lastName"
            v-model="form.lastName"
        ></b-form-input>
        <label for="Email">Email</label>
        <b-form-input
            id="Email"
            v-model="form.email"
        ></b-form-input>
        <label for="mobile">Mobile</label>
        <b-form-input
            id="mobile"
            v-model="form.mobile"
        ></b-form-input>
        <label for="issue-type">Issue Type</label>
        <b-form-select id="issue-type" class="form-select-lg mt-1" v-model="form.issue"
                       :options="issues"></b-form-select>
        <label for="issue-text">Issue Type</label>
        <b-form-textarea
            id="issue-text"
            v-model="form.issueText"
            rows="3"
            class="mt-1"
        >
        </b-form-textarea>
      </b-form>
    </b-card>
  </div>
</template>

<script lang="ts" src="./MainPage.ts"></script>

<style>

</style>