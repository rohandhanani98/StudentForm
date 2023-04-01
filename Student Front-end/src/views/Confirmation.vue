<template>
  <div>
    <h1>Student List</h1>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Gender</th>
          <th>Qualification</th>
          <th>DOB</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(student, index) in students" :key="index">
          <td>{{ student.name }}</td>
          <td>{{ student.email }}</td>
          <td>{{ student.phone }}</td>
          <td>{{ student.gender }}</td>
          <td>{{ student.qualification }}</td>
          <td>{{ student.dob }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "StudentList",
  data() {
    return {
      students: [],
    };
  },
  async created() {
    try {
      const response = await this.$axios.get("/api/students");
      this.students = response.data;
    } catch (error) {
      console.log("Error retrieving student list:", error.message);
    }
  },
};
</script>
