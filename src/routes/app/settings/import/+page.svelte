<script>
	import Papa from "papaparse";

	let files;
	let hasHeader = true;

	$: parsedContacts = [];

	$: filteredKeys = !parsedContacts.length ? [] : Object.keys(parsedContacts[0]).filter((key) =>
		parsedContacts.some(
			(person) =>
				person[key] !== "" &&
				person[key] !== null &&
				person[key] !== undefined
		)
	);

	const google2Contactly = {
		"Given Name": "firstName",
		"Additional Name": "middleName",
		"Family Name": "lastName",
		"Given Name Yomi": "phoneticFirst",
		"Additional Name Yomi": "phoneticMiddle",
		"Family Name Yomi": "phoneticLast",
		"Name Prefix": "prefix",
		"Name Suffix": "suffix",
		"Maiden Name": "maidenName",
		Nickname: "nickName",
		Photo: "profileURL",
		"Organization 1 - Name": "companyName",
		"Organization 1 - Title": "companyTitle",
		"Organization 1 - Department": "companyDepartment",
		Birthday: "birthday",
		Notes: "notes",
	};

	/*
	const parsedContact = {
		accountId: user.id,
		firstName: contact["Given Name"],
		middleName: contact["Additional Name"],
		lastName: contact["Family Name"],
		phoneticFirst: contact["Given Name "],
		phoneticMiddle: contact["Additional Name "],
		phoneticLast: contact["Family Name "],
		prefix: contact["Name Prefix"],
		suffix: contact["Name Suffix"],
		maidenName: contact["Maiden Name"],
		nickName: contact["Nickname"],
		profileURL: contact["Photo"],
		companyName: contact["Organization 1 - Name"],
		companyTitle: contact["Organization 1 - Title"],
		companyDepartment: contact["Organization 1 - Department"],
		birthday: contact["Birthday"] === "" ? null : new Date(contact["Birthday"]).toISOString(),
		notes: contact["Notes"],
	};
	*/

	function parseCSV() {
		Papa.parse(files[0], {
			header: hasHeader,
			complete: function (results) {
				console.log("Parsed data:", results.data);
				parsedContacts = results.data;
				// Here, results.data contains the parsed CSV data as an array
			},
		});
	}
</script>

<h1>Import</h1>

<input bind:files type="file" name="csv" />
<input bind:checked={hasHeader} type="checkbox" />
<button on:click={parseCSV}>Upload CSV</button>


{#if parsedContacts.length}
	<table>
		<thead>
			<tr>
				{#each filteredKeys as key}
					<th>{key}</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each parsedContacts as contact}
				<tr>
					{#each filteredKeys as key}
						<td>{contact[key]}</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
{/if}
