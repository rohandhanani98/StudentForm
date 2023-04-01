<template>
  <v-form @submit.prevent="submitForm" class="student-form">
    <h1 text-align="center">Student Registration Form</h1>
    <v-text-field
      hide-details
      outlined
      dense
      v-model="name"
      label="Name"
      required
      class="form-field"
    ></v-text-field>
    <v-text-field
      hide-details
      outlined
      dense
      v-model="email"
      label="Email"
      type="email"
      required
      class="form-field"
    ></v-text-field>
    <v-text-field
      hide-details
      outlined 
      dense
      v-model="phone"
      label="Phone"
      class="form-field"
    ></v-text-field>
    <v-select
      hide-details
      outlined 
      dense
      v-model="gender"
      label="Gender"
      :items="genders"
      required
      class="form-field"
    ></v-select>
    <v-select
      hide-details
      outlined
      dense
      v-model="qualification"
      label="Qualification"
      :items="qualifications"
      required
      class="form-field"
    ></v-select>
    <v-text-field
      hide-details
      outlined 
      dense
      v-model="dob"
      label="Date of Birth"
      type="date"
      required
      class="form-field"
    ></v-text-field>
    <v-btn @click="submitForm" small depressed color="primary" class="submit-btn">Submit</v-btn>
  </v-form>
</template>

<script>
import { mapActions } from 'vuex'
import router from '@/router'


export default {
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      gender: "",
      qualification: "",
      dob: "",
      genders: ["Male", "Female", "Other"],
      qualifications: ["Graduate", "Postgraduate", "Undergraduate"],
    };
  },
  methods: {
    ...mapActions(['createStudent']),
    async submitForm() {
      console.log("submit button clicked...");
      const formData = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        gender: this.gender,
        qualification: this.qualification,
        dob: this.dob,
      };
      try {
        const response = await this.$axios.post("/api/students", formData);
        if (response.status === 201) {
          console.log("Form submitted successfully");
          this.createStudent(response.data);
          router.push('/success');
        } else {
          console.log("Error submitting form");
        }
      } catch (error) {
        console.log("Error submitting form:", error.message);
      }
    },
    async getStudent(id) {
      try {
        const response = await this.$axios.get(`/api/students/${id}`);
        if (response.status === 200) {
          return response.data;
        } else {
          console.log("Error getting student");
          return null;
        }
      } catch (error) {
        console.log("Error getting student:", error.message);
        return null;
      }
    },
    async updateStudent(id, newData) {
      try {
        const response = await this.$axios.put(`/api/students/${id}`, newData);
        if (response.status === 200) {
          console.log("Student updated successfully");
          return response.data;
        } else {
          console.log("Error updating student");
          return null;
        }
      } catch (error) {
        console.log("Error updating student:", error.message);
        return null;
      }
    },
    async deleteStudent(id) {
      try {
        const response = await this.$axios.delete(`/api/students/${id}`);
        if (response.status === 200) {
          console.log("Student deleted successfully");
          return true;
        } else {
          console.log("Error deleting student");
          return false;
        }
      } catch (error) {
        console.log("Error deleting student:", error.message);
        return false;
      }
    },
  },
};
</script>

<style scoped>
.student-form {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: auto;
}
h1 {
  text-align: center;
}
.form-field {
  margin: 10px 0;
}

.submit-btn {
  margin-top: 20px;
  font-size: 16px;
  height: 40px;
  min-width: 120px;
}

.v-select .v-select__selections {
  font-size: 16px;
  padding: 8px 12px;
}

.v-input__control.v-input__control--is-focused:not(.v-input__control--menu-active)
  .v-input__slot::before {
  border-color: #3f51b5 !important;
}

.v-text-field__details {
  font-size: 14px;
}

.v-messages__message {
  font-size: 14px;
}

.v-label {
  font-size: 16px;
  font-weight: bold;
}

@media only screen and (max-width: 500px) {
  .student-form {
    padding: 0 20px;
  }
  .submit-btn {
    margin-top: 10px;
    font-size: 14px;
    height: 36px;
    min-width: 100px;
  }
}
</style>
