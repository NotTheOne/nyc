require 'spec_helper'

describe 'user enters homepage' do
	it 'shows index about NYC' do
		visit homepage_path
		expect(page).to have_content('NEW YORK CITY')
	end
end