document.querySelectorAll('#home-search-form .form-group input').forEach((input) => {
	input.addEventListener('focus', function () {
		document.querySelectorAll('#home-search-form .form-group').forEach((formGroup) => {
			formGroup.classList.remove('focusing');
		})
		this.closest('.form-group').classList.add('focusing');
	});
})