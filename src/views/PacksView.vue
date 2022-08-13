<template>
  <div class="packs p-10">
    <el-row :gutter="40">
      <el-col
        :span="4"
      >
        <el-card class="box-card hover:cursor-pointer" style="height: 200px">
          <div class="flex justify-center items-center" style="width: 100%; height: 100%" @click="addPackage">
            <i class="el-icon-plus" style="font-size: 30px" />
          </div>
        </el-card>
      </el-col>
      <el-col
        v-for="(pack, i) in packages"
        :key="i"
        :span="4"
        class="mb-8"
      >
        <el-card class="box-card" style="height: 200px">
          <template #header>
            <div class="clearfix">
              <b>{{ pack.name }} {{ pack.id }} </b>
              <el-dropdown style="float: right;" trigger="click" @command="handleCommand($event, pack)">
                <el-button icon="el-icon-more" type="text" />
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item :disabled="true">Edit</el-dropdown-item>
                    <el-dropdown-item :disabled="true">Archive</el-dropdown-item>
                    <el-dropdown-item command="DELETE">Delete</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </div>
          </template>
          <div>
            <span class="flex justify-start items-center px-8 py-2">
              Users: <b class="ml-1">{{ pack.users }}</b>
            </span>
            <span class="flex justify-start items-center px-8 py-2">
              projects: <b class="ml-1">{{ pack.projects }}</b>
            </span>
            <span class="flex justify-start items-center px-8 py-2">
              storage: <b class="ml-1">{{ pack.storage }}</b>
            </span>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-dialog
      title="Create Package"
      :visible="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <div class="px-10">
        <div class="py-2">
          <label class="form-label block mb-2">name *</label>
          <el-input v-model="newPackage.name" class="block" placeholder="name" />
        </div>
        <div class="py-2">
          <label class="form-label block mb-2">max users *</label>
          <el-input v-model="newPackage.users" class="block" placeholder="max users" />
        </div>
        <div class="py-2">
          <label class="form-label block mb-2">max projects *</label>
          <el-input v-model="newPackage.projects" class="block" placeholder="max projects" />
        </div>
        <div class="py-2">
          <label class="form-label block mb-2">max storage *</label>
          <el-input v-model="newPackage.storage" class="block" placeholder="max storage" />
        </div>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button type="info" plain @click="handleClose">Cancel</el-button>
          <el-button type="primary" plain @click="handleCreate">Create</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      packages: [
        {
          id: 1,
          name: 'Bronze',
          users: '3',
          projects: '1',
          storage: '100mb',
        },
        {
          id: 2,
          name: 'Silver',
          users: '5',
          projects: '3',
          storage: '500mb',
        },
      ],
      dialogVisible: false,
      newPackage: {
        name: 'Gold',
        users: '10',
        projects: '5',
        storage: '1gb',
      },
    }
  },

  methods: {
    addPackage() {
      this.dialogVisible = true
    },

    handleCommand(command, pack) {
      switch (command) {
        case 'DELETE':
          this.deletePack(pack)
          break;

        default:
          break;
      }
    },

    handleClose() {
      this.dialogVisible = false
    },

    handleCreate() {
      if (
        this.newPackage.name !== '' &&
        this.newPackage.users !== '' &&
        this.newPackage.projects !== '' &&
        this.newPackage.storage !== ''
      ) {
        this.packages.push({
          id: this.uuid(),
          ...this.newPackage
        })
        this.handleClose()
      } else {
        this.$message.error('all fields are required');
      }
    },

    deletePack({ id }) {
      this.packages = [...this.packages.filter(pack => pack.id !== id)]
    },

    uuid() {
      return Math.random().toString(16).slice(2)
    },
  }
}
</script>

<style lang="scss">
.packs {
  .el-card {
    &__body {
      width: 100%;
      height: 100%;
      padding: 0;
    }
  }
}
</style>
