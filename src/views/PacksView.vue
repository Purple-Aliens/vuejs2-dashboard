<template>
  <div class="packages-view h-full">
    <div v-if="packages.length > 0" class="flex justify-between items-center border-b-2 pb-5 border-gray-800">
      <h1 class="text-3xl">Packages</h1>
      <el-button
        type="info"
        plain
        class="uppercase"
        icon="el-icon-plus"
        @click="openCreateDialog"
      >
        add package
      </el-button>
    </div>
    <div v-if="packages.length === 0" class="py-4 flex justify-center items-center h-full flex-col">
      <img src="assets/images/empty-placeholder.png">
      <div class="flex flex-col justify-center text-center capitalize py-10">
        <span class="text-xl mb-2">getting started</span>
        <span class="mb-8">Create your first Package.</span>
        <el-button type="info" plain class="uppercase" icon="el-icon-plus" @click="openCreateDialog">first package</el-button>
      </div>
    </div>
    <el-row :gutter="40">
      <el-col :span="6" v-for="(_package, i) in packages" :key="i">
        package {{ i }}
      </el-col>
    </el-row>
    <el-dialog title="Create Package" :visible="dialogVisible" width="40rem" @close="dialogVisible = false">
      <div class="px-5">
        <div v-show="currentStep === 1">
          <div class="block mb-6">
            <label class="block capitalize mb-2">
              <span class="relative">name <span class="asterix" /></span>
            </label>
            <el-input placeholder="package name" />
          </div>
          <div class="block mb-6">
            <label class="block capitalize mb-2">
              <span class="relative">max users <span class="asterix" /></span>
            </label>
            <el-slider
              v-model="maxUsers"
              class="px-2"
              :min="0"
              :max="30"
              :step="3"
              :marks="userMarks"
            />
          </div>
          <div class="block mb-3">
            <label class="block capitalize mb-2">
              <span class="relative">max projects <span class="asterix" /></span>
            </label>
            <el-slider
              v-model="maxProjects"
              class="px-2"
              :min="0"
              :max="50"
              :step="5"
              :marks="projectMarks"
            />
          </div>
        </div>
        <div v-show="currentStep === 2">
          <div class="block mb-4">
            <label class="block capitalize mb-2">
              <span class="relative">color <span class="asterix" /></span>
            </label>
            <el-select v-model="color" placeholder="Select" class="w-full">
              <el-option
                v-for="(item, i) in colors"
                :key="i"
                :label="item.label"
                :value="item.value"
                class="flex justify-start items-center"
              >
                <span style="width: 25px; height: 25px; border-radius: 25px" class="inline-block mr-3" :class="item.value" />
                <span style="">{{ item.label }}</span>
              </el-option>
            </el-select>
          </div>
          <div class="block mb-4">
            <label class="block capitalize mb-2">
              <span class="relative">description</span>
            </label>
            <el-input type="textarea" rows="3" placeholder="package description" />
          </div>
          <div class="block mb-4">
            <label class="block capitalize mb-2">
              <span class="relative">logo</span>
            </label>
            <VueDropify height="120px">
              <span>I WILL PLAY FFXIV</span>
            </VueDropify>
          </div>
          <div class="block mb-4">
            <label class="block capitalize mb-2">
              <span class="relative">status</span>
            </label>
            <el-switch
              v-model="status"
              active-color="#13ce66"
              inactive-color="#ff4949"
              active-text="Public"
              inactive-text="Private"
            />
          </div>
        </div>
      </div>
      <template #footer>
        <span class="dialog-footer px-5">
          <el-button type="danger" plain @click="dialogVisible = false">Cancel</el-button>
          <el-button v-if="currentStep === 2" type="primary" plain @click="currentStep = 1">Previous</el-button>
          <el-button type="primary" plain @click="next">{{ actionLabel }}</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import VueDropify from 'vue-dropify'
import { colors } from '@/mocks/data'

export default {
  components: {
    VueDropify,
  },

  data() {
    return {
      dialogVisible: false,
      status: false,
      currentStep: 1,
      maxUsers: 0,
      maxProjects: 0,
      color: null,
      colors,
      packages: [],
    }
  },

  computed: {
    actionLabel() {
      return this.currentStep === 1 ? 'Next' : 'Confirm'
    },

    userMarks() {
      const marks = {}
      for (let i = 0; i <= 30; i += 3) {
        marks[i] = `${i}`
      }
      return marks
    },

    projectMarks() {
      const marks = {}
      for (let i = 0; i <= 50; i += 5) {
        marks[i] = `${i}`
      }
      return marks
    },
  },

  methods: {
    next() {
      if (this.currentStep === 1) {
        this.currentStep = 2
      } else if (this.currentStep === 2) {
        this.dialogVisible = false
        this.packages.push({})
      }
    },

    openCreateDialog() {
      this.currentStep = 1;
      this.dialogVisible = true
    },
  }
}
</script>

<style lang="scss">
.packages-view {
  .el-textarea {
    &__inner {
      resize: none !important;
    }
  }
  .asterix {
    width: 3px;
    &::after {
      content: '*';
      color: #EF4444;
      position: absolute;
      right: -5px;
      top: -2px;
    }
  }
  .el-slider {
    &__marks-text {
      width: 20px;
      text-align: center;
      font-size: 11px;
    }
    &__stop {
      border: 1px solid gray;
    }
  }
}
</style>
