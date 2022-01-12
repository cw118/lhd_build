from bs4 import BeautifulSoup
import requests

def main():
    # Ask user what they'd like to scrape and only scrape what they input
    print("Would you like to search for Marianopolis admissions updates and/or calendars?")
    print("Type `admissions` for admissions updates, and/or `calendars` for calendars (you may type both)")
    scrape = input("> ")
    print("Retrieving your information...")

    if (("admissions" not in scrape.lower()) and ("calendars" not in scrape.lower())):
        # If neither string/command is detected, exit
        print("Hmm, I'm not quite sure what you'd like me to scrape. Look out for any typos, and rerun the program to try again.")
    else:
        # Use two if conditions to allow scraping for both
        if "admissions" in scrape.lower():
            scrape_admissions()
        if "calendars" in scrape.lower():
            scrape_calendars()

"""
Simple web scraper for Marianopolis College's admissions updates
"""

def scrape_admissions():
    # Grab HTML of the corresponding site
    url_adm = "https://www.bemarianopolis.ca/admissions/admissions-updates/"
    html_adm = requests.get(url_adm).text

    soup = BeautifulSoup(html_adm, "lxml") # Parse with LXML parser

    """
    The class list/selector used below is quite specific due to it being a WordPress site.
    Depending on the site structure after new updates are posted, may need to be modified.
    """
    update_section = soup.find("div", class_ = "x-section e4336-11 m3cg-0 m3cg-3 m3cg-4")

    # Search for paragraphs containing updates
    updates = update_section.find_all("p")

    with open("scraped/adm_updates.txt", "w") as f:
        for update in updates:
            f.write(update.text + "\n")

    # Let user know scraping and saving to file is complete
    print("Admissions updates scraped and saved! Go to the adm_updates.txt file in the scraped folder (day4/scraped/adm_updates.txt).")


"""---------------------------------------------------------------------------------"""

"""
Simple web scraper for Marianopolis College's academic and course calendars
"""

def scrape_calendars():
    # Grab HTML of the corresponding site
    url_cal = "https://www.marianopolis.edu/campus-life/calendar/"
    html_cal = requests.get(url_cal).text

    soup = BeautifulSoup(html_cal, "lxml") # Parse with LXML parser

    calendar_section = soup.find("article", class_ = "content") # The page being scraped here only links to calendars within the article.content tags with a few exceptions

    # Search for links in the content <article> (this should exclude any navbar and footer links)
    calendars = calendar_section.find_all("a")

    # Open file and write
    with open("scraped/calendars.txt", "w") as f:
        for calendar in calendars:
            calendar_url = calendar["href"] # Loop through each calendar link (anchor tag) and extract its href attribute (its URL)
            calendar_title = calendar.text  # Save the "title" of the calendar

            # Only print calendar links (which all, hopefully, have the word "calendar" in their title at some point)
            if "calendar" in calendar_title.lower():
                f.write(f"{calendar_title}: {calendar_url}\n") # Use a string literal for users to more easily identify what calendar each link leads to

    # Let user know scraping and saving to file is complete
    print("Calendars scraped and saved! Go to the calendars.txt file in the scraped folder (day4/scraped/calendars.txt).")

if __name__ == "__main__":
    main()