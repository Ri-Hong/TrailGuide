import os
import dotenv

from langchain.llms import VertexAI
from langchain.prompts import PromptTemplate


dotenv.load_dotenv()

# current_dir = os.path.dirname(os.path.abspath(__file__))
# Make sure the path to the key file is correct
# key_path = os.path.join(current_dir, "../../../GACKey.json")

# os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = key_path


def getLLMResponse(question):
    llm = VertexAI(model_name="text-bison@001", max_output_tokens=1000, temperature=0.3)

    template = """
    You are a hiker assistant. You are helping a hiker. The hiker is asking you for help. The question could be about trail data, trail conditions, the weather, or survival tips. Answer to the best of your ability.
    Question: {question}

    Answer: Let's think step by step."""
    prompt = PromptTemplate.from_template(template)

    chain = prompt | llm

    # question = "Are red berries poisonous?"

    response = chain.invoke({"question": question})

    return response

