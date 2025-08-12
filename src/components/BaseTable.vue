<template>
<div class="mt-[200px] ml-[200px] z-10">
  <h1>THIS IS BASETABLE</h1>
  <table :class="tableClass">
    <thead class="thClass">
      <tr class="trClass">
        <th>#</th>
        <th>Name</th>
        <th>Last Name</th>
        <th>Username</th>
      </tr>
    </thead>
    <tbody>
      <tr>
       <td>1</td>
        <td>
          John
        </td>
        <td>
          Doe
        </td>
        <td>
          JohnDoe
        </td>
      </tr>
    </tbody>
  </table>  
</div>  
</template>

<script>
export default {
 props:{
  tableHeads:{
    type: Array,
    default: () => []
  },
  tableDatas:{
    type: Array,
    default: () => []
  }
 },
   tableHeads:{
    hash:'#',
    name:'Name',
    lastName:'Last Name',
    username:'Username'
  },
  tableDatas: [
    {name: 'John',
      lastName: 'Doe',
      username: 'johndoe'
    },
    {name: 'Jane',
      lastName: 'Smith',
      username: 'janesmith'
    }
  ]

}
</script>

<style>

</style>