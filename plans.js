import supabase from "./config.js";

/**
 *
 * @returns {Promise<GetResult<any, any, "travel_plans", R | unknown, "*">[]>}
 */
export async function getPlans() {

    let { data, error } = await supabase
      .from('travel_plans')
      .select('*')
    return data;
}