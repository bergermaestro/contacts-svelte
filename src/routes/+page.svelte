<script>
import { alphabetizeContacts } from '$lib/common_functions';
import { currentContact } from './stores.js';

export let data;

//console.log(data.response);
//console.log(data.contactGroups);

const alphabetizedContacts = alphabetizeContacts(data.response);

let activeContact;

currentContact.subscribe((contact) => {
	activeContact = contact;
});


</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<h2>Contact Groups</h2>
{#each data.contactGroups as contact_group}
	<div>
		{contact_group.group_name}
		{contact_group.color}
	</div>
{/each}

<h2>Add New Contact</h2>
<form method="POST">
	<input name="first_name"/>
	<input name="last_name"/>
	<button type="submit">Submit</button>
</form>


<h2>Active Contact:</h2>
{#if activeContact}
{activeContact.first_name} {activeContact.last_name}
{:else}
<p>No current contact</p>
{/if}


{#each Object.keys(alphabetizedContacts) as letter}
	<div>
		<h2>{letter}</h2>
		{#each alphabetizedContacts[letter] as contact (contact.id)}
			<div>{contact.first_name} {contact.last_name}</div>
			<button on:click={() => currentContact.set(contact)} style="display:inline">Set current contact</button>
		{/each}
	</div>
{/each}
	

