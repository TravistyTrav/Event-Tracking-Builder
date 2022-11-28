<template>
<div class="settings">
        <div class="settings-wrapper">
                <h2>Google Settings</h2>
                <hr />
                <br>
                <h3>Google Analytics 4 ID:</h3>
                <p>Please enter your GA4 ID. Find out how to obtain one <a href="https://support.google.com/analytics/answer/9304153?hl=en" target="_blank">here</a>.</p>
                <a-input type="text" id="ga4ID"  placeholder="G-XXXXXXX" />
                <div class="spacer"></div>
                <h3>Google Tag Manager ID:</h3>
                <p>Please enter your GTM ID. Find out how to obtain one <a href="https://support.google.com/tagmanager/answer/6103696?hl=en" target="_blank">here</a>.</p>
                <a-input type="text" id="gtmID" placeholder="GTM-XXXXXX" />
                <div class="footer-section">
                        <router-link to="/builder"><a-button @click="saveSettings">Save Settings</a-button></router-link>
                </div>
        </div>
</div>
</template>
<script>
import { Button } from 'ant-design-vue';
const ButtonGroup = Button.Group;

export default {
        name: 'Settings',
        components: {
                AButton: Button,
                AButtonGroup: ButtonGroup,
        },
        methods: {
                saveSettings() {
                        let ga4ID = document.getElementById('ga4ID').value;
                        let gtmID = document.getElementById('gtmID').value;
                        chrome.storage.local.set({'analyticsID': ga4ID, 'tagmanagerID' : gtmID});
                }
        }
}
</script>